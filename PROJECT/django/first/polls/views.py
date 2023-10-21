from django.shortcuts import render
from .models import Choice, Question, Poll
from django.http import HttpResponse
from django.template import loader
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from django.views import generic
from django.http import JsonResponse

# def index(request):
#     latest_question_list = Question.objects.order_by('-pub_date')[:5]
#     context = {'latest_question_list': latest_question_list}
#     return render(request, 'polls/index.html', context)

# def results(request, question_id):
#     question = get_object_or_404(Question, pk=question_id)
#     return render(request, 'polls/results.html', {'question': question})

# def detail(request, question_id):
#     question = get_object_or_404(Question, pk=question_id)
#     return render(request, 'polls/detail.html', {'question': question})

class IndexView(generic.ListView):
    template_name = 'polls/index.html'
    context_object_name = 'latest_question_list'

    def get_queryset(self):
        """Return the last five published questions."""
        return Question.objects.order_by('-pub_date')[:5]


class DetailView(generic.DetailView):
    model = Question
    template_name = 'polls/detail.html'


class ResultsView(generic.DetailView):
    model = Question
    template_name = 'polls/results.html'



def vote(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        # Redisplay the question voting form.
        return render(request, 'polls/detail.html', {
            'question': question,
            'error_message': "You didn't select a choice.",
        })
    else:
        selected_choice.votes += 1
        selected_choice.save()
        # Always return an HttpResponseRedirect after successfully dealing
        # with POST data. This prevents data from being posted twice if a
        # user hits the Back button.
        return HttpResponseRedirect(reverse('polls:results', args=(question.id,)))
    

 # polls/views.py




def get_polls_data(request):
    polls = Poll.objects.all()
    poll_data_list = []

    for poll in polls:
        poll_data = {
            "Question": poll.question_text,
            "OptionVote": {
                "Option1": poll.option1,
                "Option2": poll.option2,
                "Option3": poll.option3,
            },
            "Tags": [tag.name for tag in poll.tags.all()],
        }
        poll_data_list.append(poll_data)

    return JsonResponse(poll_data_list, safe=False)

def get_tags(request):
    polls=Poll.objects.all()
    tags

from django.views.decorators.csrf import csrf_protect

# views.py

from django.middleware.csrf import get_token
from django.http import JsonResponse

def get_csrf_token(request):
    csrf_token = get_token(request)
    return JsonResponse({'csrf_token': csrf_token})

from django.views.decorators.csrf import csrf_exempt
import json


from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
import json

@csrf_exempt
# def my_view(request):
#     if request.method == 'POST':
#         try:
           
#             json_data = json.loads(request.body)
          
#             return render(request, 'polls/my_template.html', {'json_data': json.dumps(json_data, indent=4)})
#         except json.JSONDecodeError:
           
#             return HttpResponse('Invalid JSON data', status=400)
#     else:
        
#         return HttpResponse('This view only accepts POST requests', status=405)

# def my_view(request):
#     if request.method == 'POST':
#         try:
#             json_data = json.loads(request.body)
#             # Create an instance of the Poll model and populate it with data
#             poll = Poll(
#                 question_text=json_data['question_text'],
#                 option1=json_data['option1'],
#                 option2=json_data['option2'],
#                 option3=json_data['option3']
#             )
#             poll.save()  # Save the instance to the database

#             # If you have tags associated with the Poll, you can add them here
#             # For example, if you have a list of tag names in json_data:
#             tag_names = json_data.get('tags', [])
#             for tag_name in tag_names:
#                 tag, created = Tag.objects.get_or_create(name=tag_name)
#                 poll.tags.add(tag)

#             return HttpResponse('Data saved successfully')
#         except json.JSONDecodeError:
#             return HttpResponse('Invalid JSON data', status=400)
#     else:
#         return HttpResponse('This view only accepts POST requests', status=405)

# def incVote(request,pk):
#     if request.method == 'PUT':
#          question=Question.objects.get(pk=pk)
#          choices = Choice.objects.filter(question=question)
#          payload = request.POST 

#          if 'incrementOption' in payload:
#              increment_option=payload['incrementOption']


 
#          list = {
#             "Question": question.question_text,
#             "Choices":[]   #created an empty array
#          }
#          for choice in choices:
#              choice_data={
#                  "Choice": choice.choice_text,
#                  "Votes": choice.votes,
                 
#              }
#              list["Choices"].append(choice_data)
      
#     return JsonResponse(list, safe=False)


def incVote(request, pk):
    if request.method == 'POST':
        question = Question.objects.get(pk=pk)  
        # payload = request.POST  # Assuming you're sending data in the POST request body
        # print(payload)
        try:
            payload = json.loads(request.body.decode('utf-8'))
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON payload"}, status=400)
        
        print(payload)


        # Check if 'incrementOption' is in the payload
        if 'incrementOption' in payload:
            print("inside the loop")
            increment_option = payload['incrementOption']
            
            try:
                choice = Choice.objects.get(question=question, choice_text=increment_option)
                choice.votes += 1
                choice.save()

                data_list = {
                    "Question": question.question_text,
                    "Choices": [
                        {
                            "Choice": choice.choice_text,
                            "Votes": choice.votes,
                        }
                    ]
                }

                return JsonResponse(data_list)
            except Choice.DoesNotExist:
                return JsonResponse({"error": "Choice not found"}, status=404)
        else:
            return JsonResponse({"error": "'incrementOption' not found in the payload"}, status=400)



def createQuestion(request):
    if request.method == 'POST':
        try:
            json_data = json.loads(request.body)
            question_text = json_data.get("Question")
            options = json_data.get("OptionVote", {})
            tags = json_data.get("Tags", [])

            if not question_text:
                return HttpResponse('Question text is required', status=400)

            # Create a Poll instance
            poll = Poll(question_text=question_text)
            print(question_text)
            poll.save() 
            print(tags) # Save the initial Poll instance

            # Create Option instances and associate them with the Poll
            for option_number, option_text in options.items():
                # Extract the option number (e.g., "Option 1" -> 1)
                option_number = int(option_number.split()[-1])
                # Create the option
                setattr(poll, f'option{option_number}', option_text)

            # Save the Poll instance after adding options
            poll.save()

            # Create Tag instances and associate them with the Poll
            for tag_name in tags:
                tag, created = Tag.objects.get_or_create(name=tag_name)
                poll.tags.add(tag)
            
            print(f"Saved question with id: {poll.id}")

            return HttpResponse('Data saved successfully')
        except json.JSONDecodeError:
            return HttpResponse('Invalid JSON data', status=400)
    else:
        return HttpResponse('This view only accepts POST requests', status=405)


from django.http import JsonResponse

# # Mock data
# data = [
#     {
#         "Question": "question_text",
#         "OptionVote": {
#             "Option1": "vote1",
#             "Option2": "vote2",
#             "Option3": "vote3"
#         },
#         "Tags": ["tag1", "tag2"]
#     },
# ]

# def get_pollsurl(request):
  
#     tags = request.GET.get('tags', '').split(',')
#     filtered_data = [poll for poll in data if all(tag in poll['Tags'] for tag in tags)]

#     return JsonResponse(filtered_data, safe=False)
from django.http import JsonResponse


poll_data = {
    "Question": "question_text",
    "OptionVote": {
        "Option1": "vote1",
        "Option2": "vote2",
        "Option3": "vote3"
    },
    "Tags": []  
}

def get_pollsurl(request, *args, **kwargs):
   
    tags = request.GET.getlist('tags')

    
    poll_data['Tags'] = tags

    return JsonResponse(poll_data)

from django.http import HttpResponse

from django.db import connection

# def filtered_polls(request):
#     tags = request.GET.getlist('tags')

#     print("Received tags:", tags)

#     polls = Poll.objects.filter(tags__name__in=tags)

#     print("Number of filtered polls:", polls.count())

#     # Print the generated SQL query for debugging
#     print(connection.queries)

#     return render(request, 'polls/filtered_polls.html', {'polls': polls})

# def filtered_polls(request):
#     # Get the tags from the query parameters in the URL
#     tags = request.GET.get('tags', '').split(',')

#     # Filter the questions based on the selected tags
#     questions = Question.objects.filter(tags__name__in=tags)

#     return render(request, 'polls/filtered_polls.html', {'questions': questions})

# def filtered_polls(request):
#     print(request)
#     tags = request.GET.getlist('tags')
#     print(tags)
#     # polls = Poll.objects.filter(tags__name__in=tags)
#     polls = Poll.objects.all()
#     poll_data_list = []

#     for poll in polls:
#         if(tags.name==poll_data.Tags):
#          poll_data = {
#             "Question": poll.question_text,
#             "OptionVote": {
#                 "Option1": poll.option1,
#                 "Option2": poll.option2,
#                 "Option3": poll.option3,
#             },
#             "Tags": [tag.name for tag in poll.tags.all()],
#         }
#         poll_data_list.append(poll_data)

#     print(polls)
#     return JsonResponse(poll_data_list, safe=False)

from django.http import JsonResponse
from .models import Poll, Tag

from django.http import JsonResponse
from .models import Poll, Tag



# def filtered_polls(request):
#     tags = request.GET.getlist('tags')
#     print(tags)

#     if not tags:
#         return JsonResponse([], safe=False)

#     poll_data_list = []


#     all_polls = Poll.objects.all()
    

#     for poll in all_polls:
       
#         poll_tags = list(poll.tags.values_list('name', flat=True))
#         print(poll_tags)
    

#         # Check if all specified tags are in the poll's tags
#         x=any(tag in poll_tags for tag in tags)
#         print(x)
#         if any(tag in poll_tags for tag in tags):
#             poll_data = {
#                 "Question": poll.question_text,
#                 "OptionVote": {
#                     "Option1": poll.option1,
#                     "Option2": poll.option2,
#                     "Option3": poll.option3,
#                 },
#                 "Tags": poll_tags,
#             }
#             print(poll_data)
#             print("This is poll_data")
          
         
#             poll_data_list.append(poll_data)
#     print("this is poll_data_list")
#     print(poll_data_list)

#     return JsonResponse(poll_data_list, safe=False)

from django.http import JsonResponse
from .models import Poll

# def filtered_polls(request):
#     tags = request.GET.get('tags', '').split(',')
#     print(tags)

#     if not tags:
#         return JsonResponse([], safe=False)

#     poll_data_list = []

#     # Filter polls that match any of the specified tags
#     matching_polls = Poll.objects.filter(tags__name__in=tags).distinct()
#     print(matching_polls)
   

#     for poll in matching_polls:
#         poll_data = {
#             "Question": poll.question_text,
#             "OptionVote": {
#                 "Option1": poll.option1,
#                 "Option2": poll.option2,
#                 "Option3": poll.option3,
#             },
#             "Tags": list(poll.tags.values_list('name', flat=True))
#         }
#         poll_data_list.append(poll_data)
#         print(poll_data)
    
#     print(poll_data_list)

#     return JsonResponse(poll_data_list, safe=False)

from django.http import JsonResponse
from .models import Poll,Tag
import collections
import re
def filtered_polls(request):
    tags = request.GET.get('tags', '').split(',')

    if not tags:
        return JsonResponse([], safe=False)

    poll_data_list = []

    all_polls = Poll.objects.all()
  
    for poll in all_polls:
         poll_tags = poll.tags.values_list('name', flat=False)#orm
         poll_tags = [tag[0] for tag in poll_tags] 
        #  print(type(tags))
        #  print(type(poll_tags))
         set1 = set(poll_tags)
         set2 = set(tags)
         set1 = set(','.join(set1).split(','))
         set2 = set(','.join(set2).split(','))
        #  print("before loop set2" ,set2)
        #  print("before loop set1",set1)
         if(set2.intersection(set1)):
          print("Set1:",set1)
          print("Set2:",set2)
          print("common elements:",set2.intersection(set1))
          print("question:",poll.question_text)
          print("options:",poll.option1,poll.option2,poll.option3)
          print("tags:",set1)
          print("\n")

        #  print(set1),
        #  print(set2)
    # common=set1.intersection(set2)
    # print(common)
         
        #  if set2.issubset(set1):
        #      print(set2)
        #      print(set1)
        #      print(poll.question_text)
        #      print(poll.option1,poll.option2,poll.option3)
        #      print(set2)#tag
            #  print("is a subset")


    # for poll_tag in poll_tags:
    #     print("inside for poll for loop")
    #     print(poll_tag)
    #     for tag in tags:
    #         if tag.issubset(poll_tag):
    #             print(tag)
    #             print("inside for tag loop")
             
            
   

 
    # for poll in all_polls:
    #     poll_tags = poll.tags.values_list('name', flat=False)  # Get a queryset of tag values
    #     poll_tags = [tag[0] for tag in poll_tags]#converts the ORM (object relational mapping) sstem to strings taking only the first item from the list
    #     for poll_tag in poll_tags:
    #      for tag in tags:
    #       if poll_tag == tag:
    #         print(f"Matching tag: {poll_tag}")

        



       
        
        # if(a==b):
        #  print("inside if")
        #  print("they are same ")
        # for p in poll_tags:
        #  print(p)
        #  print("inside for loop")
        #  if p == tags:
        #   print(p)
        #   print("inside if condition")
        # # Do something when a match is found
        #   print(f"Matching tag: {p}")



        # Extract tag values from the queryset into a list
       






        # Check if any of the specified tags are in the poll's tags
        # if any(tag in poll_tags for tag in tags):
        #     poll_data = {
        #         "Question": poll.question_text,
        #         "OptionVote": {
        #             "Option1": poll.option1,
        #             "Option2": poll.option2,
        #             "Option3": poll.option3,
        #         },
        #         "Tags": poll_tags,
        #     }
        #     poll_data_list.append(poll_data)

    return JsonResponse(poll_data_list, safe=False)







from django.http import JsonResponse
from .models import Tag

def list_tags(request):
    tags = Tag.objects.values_list('name', flat=True)
    return JsonResponse({'tags': list(tags)}, safe=False)

from django.http import JsonResponse, Http404
from .models import Poll

def get_poll_detailsid(request, poll_id):
    try:
        poll = Poll.objects.get(pk=poll_id)
    except Poll.DoesNotExist:
        raise Http404("Poll does not exist")

    poll_data = {
        "Question": poll.question_text,
        "Option1": poll.option1,
        "Option2": poll.option2,
        "Option3": poll.option3,
        "Tags": [tag.name for tag in poll.tags.all()],
    }
    return JsonResponse(poll_data)








