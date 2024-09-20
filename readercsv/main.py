import csv
# with open('/home/naesis/Desktop/mt.csv', newline='') as csvfile:
#     reader = csv.DictReader(csvfile)
#     for row in reader:
#         pass #print(row)

with open('/home/naesis/Desktop/Медитации.csv', 'r', newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=';', quotechar='|')
    for row in spamreader:
        print ("INSERT INTO meditation_local (`meditation_id`, `title`, `local_code`) VALUES (" + row[0] + ", \"" + row[3] + "\", 'FR');")
        print ("INSERT INTO meditation_local (`meditation_id`, `title`, `local_code`) VALUES (" + row[0] + ", \"" + row[2] + "\", 'RU');")
        print ("INSERT INTO meditation_local (`meditation_id`, `title`, `local_code`) VALUES (" + row[0] + ", \"" + row[1] + "\", 'EN');")
        #print(row[0], row[1], row[2], row[3])