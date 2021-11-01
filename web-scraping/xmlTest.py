import xml.etree.ElementTree as ET
from xml.dom import minidom

tree = ET.parse('QuizWithImage.xml')
root = tree.getroot()
tree2 = minidom.parse('QuizWithImage.xml')
# print(root.tag)

# for i in root:
#     print(i)

print("\n"*3)
print("Questions: ")
print()

for x in root.findall('item'):
    for x in x.findall('presentation'):
        for x in x.findall('material'):
            mattext = x.find('mattext').text
            if '<img src=' in mattext:
                print('Contains an image \n')
            else:
                print('Image in not contained \n') 
            print(mattext)
            # imageString = mattext.index('')
            # for i in range(0, imageString):
            #     print(i)

        print("\n"*3)


print("\n"*3)
print("Answers: ")
print()

for x in root.findall('item'):
    for x in x.findall('presentation'):
        for x in x.findall('response_lid'):
            for x in x.findall('render_choice'):
                for x in x.findall('response_label'):
                    for x in x.findall('material'):
                        mattext = x.find('mattext').text
                        print(mattext)
                    print("\n"*3)
print("Total number of questions in the file: " + str(len(tree2.getElementsByTagName('item'))))

print("")
print("XML script has been run.")

