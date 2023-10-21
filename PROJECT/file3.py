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


def view_poll(polls_data, pollNumber):
    if pollNumber < 1 or pollNumber > len(polls_data):
        print("Invalid pollNumber. Please enter a valid poll number.")
        return

    poll = polls_data[pollNumber - 1] 

    question = poll["Question"]
    options = poll["Options"]
    tags = poll["Tags"]

    print(question)
    for option, vote_count in options.items():
        print(f"* {option} {vote_count}")

    tag_string = ", ".join(tags)
    print(f"\nTags: {tag_string}")


pollNumber = 6
view_poll(data, pollNumber)
