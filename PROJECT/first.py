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

questions_data = load_fps(filepath)

for question in questions_data:
    print(question)
