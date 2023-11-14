from django.shortcuts import render
from .models import Choice, Question, Poll,MyFirstTable
from django.http import HttpResponse
from django.template import loader
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from django.views import generic
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_protect
from django.middleware.csrf import get_token
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.db import connection
from .models import Poll, Tag,Question,Choice
from django.http import  Http404


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
    



def get_questions_data(request,pk):
    data = Question.objects.get(pk=pk)
    data_list = []
    question = Question.objects.filter(pk=data.id).first()  
    if question:
            totalvotes=0
            poll_data = {
                "Number": data.id,
                "Question": data.question_text,
                "TotalVotes": totalvotes,
                "Choices": [],

                "Tags": [tag.name for tag in question.tags.all()],  # Use the reverse relationship
            }
            choices = data.choice_set.all()
            for choice in choices:
                totalvotes=totalvotes+choice.votes
                poll_data["Choices"].append({
                    "number": choice.pk,
                    "choice_text": choice.choice_text,
                    "votes": choice.votes
                })
            poll_data["TotalVotes"]=totalvotes
            data_list.append(poll_data)

    return JsonResponse(data_list, safe=False)




   
def get_polls_data(request,pk):
    data = Question.objects.get(pk=pk)
    data_list = []  
 
    poll = Poll.objects.filter(pk=data.id).first()  # Get the corresponding Poll object
    if poll:
            totalvotes=0
            poll_data = {
                 "Number": data.id,
                 "Question": data.question_text,
                 "TotalVotes": totalvotes,
                "Choices": [],

                 "Tags": [tag.name for tag in poll.tags.all()],  # Use the reverse relationship
             }
            choices = data.choice_set.all()
            for choice in choices:
                 totalvotes=totalvotes+choice.votes
                 poll_data["Choices"].append({
                     "number": choice.pk,
                     "choice_text": choice.choice_text,
                     "votes": choice.votes
                 })
            poll_data["TotalVotes"]=totalvotes
            data_list.append(poll_data)

    return JsonResponse(data_list, safe=False)


def all_data(request):
    data = Question.objects.all()
    data_list = []
    
   
    for question in data:
 
            totalvotes=0
            poll_data = {
                "Number": question.id,
                "Question": question.question_text,
                "TotalVotes": totalvotes,
                "Tags": [tag.name for tag in question.tags.all()],  # Use the reverse relationship
            }
            choices = question.choice_set.all()
            for choice in choices:
                totalvotes=totalvotes+choice.votes
             
            poll_data["TotalVotes"]=totalvotes
            data_list.append(poll_data)

    return JsonResponse(data_list, safe=False)





def get_csrf_token(request):
    csrf_token = get_token(request)
    return JsonResponse({'csrf_token': csrf_token})




@csrf_exempt


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

       
    return JsonResponse(poll_data_list, safe=False)

def filtered_tags(request):
    tags = request.GET.get('tags', '').split(',')
    tags = request.GET.get('tags', '').split('%2C')

    if not tags:
        return JsonResponse([], safe=False)

    poll_data_list = []

    all_polls = Question.objects.all()
    choices=Choice.objects.all()
    totalvotes=0
  
    for poll in all_polls:
        
         poll_tags = poll.tags.values_list('name', flat=False)#orm
         poll_tags = [tag[0] for tag in poll_tags] 
       
         set1 = set(poll_tags)
         set2 = set(tags)
         set1 = set(','.join(set1).split(','))
         set2 = set(','.join(set2).split(','))
      
         if(set2.intersection(set1)):
          print("Set1:",set1)
          print("Set2:",set2)
          print("common elements:",set2.intersection(set1))
          print("question:",poll.question_text)
         
        
          choices = Choice.objects.filter(question__question_text=poll.question_text)
            
          
          for choice in choices:
                totalvotes=totalvotes+choice.votes
                print("Choice: ", choice.choice_text)
          print("Totalvotes:",totalvotes)
          print("tags:",set1)
          print("\n")

       

    return JsonResponse(poll_data_list, safe=False)





@csrf_exempt
def list_tags(request):
    tags=Tag.objects.all()
    Tag_list=[]

    if tags:
        Tag_list={
        "Tags":[tag.name for tag in tags]
        }
    return JsonResponse(Tag_list,safe=False)





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








