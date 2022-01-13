import requests
from bs4 import BeautifulSoup
import json
# import matplotlib.pyplot as plt
# import matplotlib.image as mpim

with open('ConceptQuiz.html', 'r') as f:

    contents = f.read()

    soup = BeautifulSoup(contents, 'html.parser')

d = {
#    "module_num": "",
#    "question_num": 0,
#    "question_type": "",
#    "question": "",
#    "answer_choices": {
#        "a": 0,
#        "b": 0,
#        "c": 0,
#        "d": 0
#    },
#    "solution": "",
#    "topics": [""],
#    "images": {}
}

with open("output.html", "w", encoding='utf-8') as file:
    
    file.write('<body>')
    file.write('\n')
    file.write('<h1> HTML Python Question Scraper </h1>')
    file.write('\n')
    
   
    # print(soup.find_all('p').name) 
    i = 0
    for tag in soup.find_all('li'):
        file.write(str(tag))
        d.update({i: tag.text})
        # for child in tag.find_all('img'):
        #     img = mpim.imread(str(child))
        #     imgplot = plt.imshow(img)
        #     plt.show()
    #     # d.append(tag.text)
        file.write('</br>'*2)
        i+=1
    #     file.write('\n')
    file.write('</body>')



with open("output.json", "w") as file:
    json.dump(d, file, indent =4)


  
        
