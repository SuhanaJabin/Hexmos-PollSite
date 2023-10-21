def load_fps(filepath):
    data = []  

    with open(filepath, 'r') as file:
        next(file)  
        for line in file:
            line = line.strip()
            if line:
           
                segments = line.split(" :: ")

                question = segments[0]
                options_str = segments[1]
                votes_str = segments[2]
                tags_str = segments[3]

               
                options = options_str.split(" | ")
                votes = votes_str.split(" | ")
                tags = tags_str.split(" | ")

                
                option_vote = {}
                for opt, vote in zip(options, votes):
                    option_vote[opt] = int(vote)

                
                question_dict = {
                    "Question": question,
                    "Options": option_vote,
                    "Votes": dict(zip(options, [int(vote) for vote in votes])),
                    "Tags": tags
                }

               
                data.append(question_dict)

    return data


filepath = 'C://Users//user//Desktop//prep//Hexmos//Hexmos//PROJECT//polldata.fps'

data = load_fps(filepath)



# data = [
#     {
#         'Question': 'Is IPhone12 worth buying?',
#         'Options': {'Yes': 0, 'No': 200},
#         'Votes': {'Yes': 0, 'No': 200},
#         'Tags': ['phones', 'apple']
#     },
#     {
#         'Question': 'Will India win the next world up?',
#         'Options': {'Yes': 5, 'No': 0},
#         'Votes': {'Yes': 5, 'No': 0},
#         'Tags': ['cricket', 'India']
#     },
#     {
#         'Question': 'Which is your favourite programming language ?',
#         'Options': {'Python': 1, 'Java': 0, 'C': 0, 'C++': 0},
#         'Votes': {'Python': 1, 'Java': 0, 'C': 0, 'C++': 0},
#         'Tags': ['Programming']
#     },
#     {
#         'Question': 'What’s the most liked shoe brand according to you?',
#         'Options': {'puma': 1, 'adidas': 2, 'sparx': 3, 'reebok': 4},
#         'Votes': {'puma': 1, 'adidas': 2, 'sparx': 3, 'reebok': 4},
#         'Tags': ['shoes', 'brands']
#     },
#     {
#         'Question': 'When will the vaccine for covid get distributed in India?',
#         'Options': {'by February 2021': 10, 'by June 2021': 20, 'It will take another year': 1, 'It will never happen': 0},
#         'Votes': {'by February 2021': 10, 'by June 2021': 20, 'It will take another year': 1, 'It will never happen': 0},
#         'Tags': ['health', 'covid']
#     },
#     {
#         'Question': 'Which is the most loved tourist place in Kasaragod district',
#         'Options': {'Bekal Fort': 6, 'Ranipuram': 1, 'Ananthapura lake temple': 1, 'Kottancheri Hills': 2},
#         'Votes': {'Bekal Fort': 6, 'Ranipuram': 1, 'Ananthapura lake temple': 1, 'Kottancheri Hills': 2},
#         'Tags': ['tourist place', 'location']
#     }
# ]

def filter_by_tags(polls_data, list_of_tags):
    filtered_data = []

    for question_dict in polls_data:
        tags = question_dict.get("Tags", [])
     
        if any(tag in tags for tag in list_of_tags):
            filtered_data.append(question_dict)

    return filtered_data


list_of_tags = ["phone", "cricket"]
filtered_questions = filter_by_tags(data, list_of_tags)

for question in filtered_questions:
    print(question)
