import json
import csv
 
with open('XCITE-testing.json') as json_file:
    filedata = json.load(json_file)
 
data = filedata[1]['actor']
 
# now we will open a file for writing
data_file = open('data.csv', 'w')
 
# create the csv writer object
csv_writer = csv.writer(data_file)
 
# Counter variable used for writing
# headers to the CSV file
count = 0
 
for i in data:
    if count == 0:
 
        # Writing headers of CSV file
        header = i.keys()
        csv_writer.writerow(header)
        count += 1
 
    # Writing data of CSV file
    csv_writer.writerow(i.values())
 
data_file.close()