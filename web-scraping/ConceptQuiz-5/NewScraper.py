import requests
from bs4 import BeautifulSoup
import json
# import matplotlib.pyplot as plt
# import matplotlib.image as mpim

with open('ConceptQuiz.html', 'r') as f:

    contents = f.read()

    soup = BeautifulSoup(contents, 'html.parser')

with open("output.html", "w", encoding='utf-8') as file:
    # Load MathJax
    file.write('<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>\n')
    file.write('<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>\n')
    # Use Single Dollar Sign as Delimiters
    file.write('<script id="inline">\n')
    file.write("\twindow.MathJax = {\n\t\ttex: {\n\t\t\tinlineMath:[['$','$']]\n\t\t}\n\t};\n")
    file.write('</script>\n')

    file.write('<body>')
    file.write('\n')
    file.write('<h1> HTML Python Question Scraper </h1>')
    file.write('\n')
    
   
    # print(soup.find_all('p').name) 
    i = 0
    for tag in soup.find_all('li'):
        # Write to HTML Output
        file.write(str(tag))
        file.write('</br>'*2)
        i+=1
    file.write('</body>')


#        images = tag.find_all('img', src=True)
#        for image in images:
#            print(image['src'])

# Object to store JSON
questions = []

tags = soup.find_all('li')
# Class for Keys
json_key = tags[0]['class'][0]
print(json_key)
# Class for Values
json_value = tags[1]['class'][0]
print(json_value)

currQuestion = {}
currKey = ""
it = 0

for tag in tags:
    # New Question that is not the First
    currText = str(tag.text).strip()
    if currText == "question_type" and currQuestion:
        questions.append(currQuestion)
        currQuestion = {}
    # Key Found
    if tag['class'][0] == json_key:
        # The Current Key Being Filled Out
        currKey = currText
        # The value must be a string for these Keys
        if currKey == "question_type" or currKey == "question" or currKey == "explanation":
            currQuestion.update({ currKey : ""})
        # The value must be an array of strings for any other key
        else:
            currQuestion.update({ currKey : []})
    # Value Found
    if tag['class'][0] == json_value:
        # If the key is images, must do this special method
        if currKey == "images":
            images = tag.find_all('img', src=True)
            for image in images:
                currQuestion[currKey].append(image['src'])
        # If it is one of these keys, we can directly set the string
        elif currKey == "question_type" or currKey == "question" or currKey == "explanation":
            currQuestion[currKey] = currText
        # Else, we must append to the already existent array
        else:
            currQuestion[currKey].append(tag.text)
# Append the final question
questions.append(currQuestion)


with open("output.json", "w") as file:
    json.dump(questions, file, indent = 2)

