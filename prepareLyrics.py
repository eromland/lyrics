source = open('lyrics.txt', 'r')
result = open('processed.txt', 'w')

lyricString = ""

lines = source.readlines()
lines = filter(lambda x: not x.isspace(), lines)


for line in lines:
    #table = str.maketrans(dict.fromkeys("()"))
    #line.translate(table)
    line = ''.join(x for x in line if x not in '()')
    line = line.translate({ord(i): None for i in ','})
    line = line.translate({ord(i): None for i in '\n'})
    line = line + " "

    line = line.lower()

    lyricString = lyricString + line

words = lyricString.split()

for word in words:
    result.write('"')
    result.write(word)
    result.write('", ')

source.close()
result.close()

