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

def update_poll(polls_data, pollNumber, optionName):
    if pollNumber < 1 or pollNumber > len(polls_data):
        print("Invalid pollNumber. Please enter a valid poll number.")
        return polls_data

    poll = polls_data[pollNumber - 1] 
    options = poll["Options"]

    if optionName not in options:
        print("Invalid optionName. Please enter a valid option name.")
        return polls_data

    options[optionName] += 1

    return polls_data


pollNumber = 3 
optionName = "Java" 
updated_polls_data = update_poll(questions_data, pollNumber, optionName)


for question in updated_polls_data:
    print(question)


def save_poll(polls_data, filepath):
    with open(filepath, 'w') as file:
        
        file.write("Question :: Options | Votes | Tags\n")


        for poll in polls_data:
            question = poll["Question"]
            options = poll["Options"]
            votes = [str(options[option]) for option in options]
            tags = " | ".join(poll["Tags"])
            
           
            file.write(f"{question} :: {' | '.join(options)} | {' | '.join(votes)} | {tags}\n")


filepath = 'C://Users//user//Desktop//prep//Hexmos//Hexmos//PROJECT//new_polldata.fps'
save_poll(questions_data, filepath)
