def load_fps(filepath):
    data = []#created an empty array
    current_question = {}#created an empty dictionary

    with open(filepath, 'r') as file:
        for line in file:
            line = line.strip()
            if line:
                if "::" in line:
                   
                    question, rest = line.split(" :: ", 1)
                    options, rest = rest.split(" :: ", 1)
                    votes, tags = rest.split(" :: ")

                    option_list = options.split(" | ")
                    vote_list = votes.split(" | ")

                   
                    current_question = {
                        "Question": question,
                        "OptionVote": {},
                        "Tags": tags.split(" | ")
                    }

                    for opt, vote in zip(option_list, vote_list):
                        try:
                            current_question["OptionVote"][opt] = int(vote)
                        except ValueError:
                           
                            pass
                else:
                    current_option_list = options.split(" | ")
                    current_vote_list = line.split(" | ")

                    for opt, vote in zip(current_option_list, current_vote_list):
                        try:
                            current_question["OptionVote"][opt] = int(vote)
                        except ValueError:
                           
                            pass

            else:

                if current_question:
                    data.append(current_question)
                    current_question = {}

        if current_question:
            data.append(current_question)

    return data

filepath = 'C://Users//user//Desktop//prep//Hexmos//Hexmos//PROJECT//polldata.fps'  # Replace with your file path
result = load_fps(filepath)
for question in result:
    print(question)
