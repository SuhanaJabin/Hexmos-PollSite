def filtering_tags(polls_data,taglist):
    filtered=[]#an empty filtered array created

    for poll in polls_data:
        tags = poll.get("Tags",[])
        print(tags)
        if any(tag in tags for tag in taglist):
         filtered.append(poll)

    # for poll in polls_data:
    #    if "Tags" in poll:
    #         tags = poll["Tags"]
    #    else:
    #         tags = []   
        
    #    if any(tag in tags for tag in taglist):
    #         filtered.append(poll)

    return filtered

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



#now defining the main function
def main():
    filepath = 'C://Users//user//Desktop//prep//Hexmos//Hexmos//PROJECT//polldata.fps'  
    polls_data=load_fps(filepath)
    taglist_in=input("Enter list of tags")
    taglist=[tag.strip() for tag in taglist_in.split(",")]
    print(taglist)

    filtered=filtering_tags(polls_data,taglist)

    for poll in filtered:
        print(poll)

if __name__ =="__main__":
    main()