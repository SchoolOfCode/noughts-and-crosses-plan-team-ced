# Billie Eilish
import webbrowser
import os
import time

score = 0

def questionAndAnswer( question, answers, correctAnswer, rightMessage, WrongMessage): 
    global score 
    print(question)

    print(answers[0])
    print(answers[1])
    print(answers[2])

    res = input().lower()
    print(res)
    if(res == correctAnswer):
        score += 1
        os.system('cls||clear')
        print(rightMessage)
        time.sleep(3)
        os.system('cls||clear')
    else:
        print(WrongMessage + ". Your score was " + str(score))

        exit()



print("Hello! Would you like to play a game of trivai?")
print("- Yes")
print("- No")

res = input().lower()

if(res == "no"):
    print("die")
    exit()
elif(res == "yes"):
    print("GOOD LET'S GOOOOOOOOOOOO")
else:
    print("i asked you ONE question with TWO options you fucking idiot, learn to spell, fuck off and leave me alone")
    webbrowser.open("https://www.youtube.com/watch?v=PV3_UHG73oQ", new=1)
    exit()


os.system('cls||clear')


questionAndAnswer("Which flies a green, white, and orange (in that order) tricolour flag?" , ["Ireland" , "Ivory Coast" , "Italy"] , "italy" ,
"OOo we got a little nerd on our hands over here", "'You're a failure'- your mother... probably")

questionAndAnswer("What company makes the Xperia model of smartphone?" , ["Samsung", "Sony" , "Nokia"], "sony" , 
"Well done you!!! (sarcasm)", "'You're a failure'- your mother... probably")

questionAndAnswer("Which city is home to the Brandenburg Gate?" , 
["Vienna" , "Zurich" , "Berlin"] , "berlin", "Wooooooooowwwwwwww, what a little star (again, sarcasm)" , 
"you will never win your parents affection.")






# 2) Which flies a green, white, and orange (in that order) tricolour flag? 

# Ireland
# Ivory Coast
# Italy
# Italy

# 3) What company makes the Xperia model of smartphone?

# Samsung
# Sony 
# Nokia
# Sony

# 4) Which city is home to the Brandenburg Gate?

# Vienna
# Zurich
# Berlin
# Berlin

# 5) Which of the following is NOT a fruit?

# Rhubarb
# Tomatoes
# Avocados
# Rhubarb

# 6) Where was the first example of paper money used?

# China
# Turkey
# Greece
# China

# 7) Who is generally considered the inventor of the motor car?

# Henry Ford
# Karl Benz
# Henry M. Leland
# Karl Benz

# 8) If you were looking at Iguazu Falls, on what continent would you be?

# Asia
# Africa
# South America
# South America

# 9) What number was the Apollo mission that successfully put a man on the moon for the first time in human history? 

# Apollo 11
# Apollo 12
# Apollo 13