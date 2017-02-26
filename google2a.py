import math
def calcSumNumber(L):
	if len(L) == 0:
		return 0

	L = list(reversed(sorted(L)))
	number = map(str, L)
	return int("".join(number))

def popMin(L):
	if L:
		L.remove(min(L))

def answer(L):
	sum_arr = sum(L)

	if sum_arr % 3 == 0:
		return calcSumNumber(L)

	l = [i for i in L if i % 3 == 0]
	l1 = [i for i in L if i % 3 == 1]
	l2 = [i for i in L if i % 3 == 2]

	if sum_arr % 3 == 1:
		if l1:
			popMin(l1)
			return calcSumNumber(l+l1+l2)
		else:
			popMin(l2)
			popMin(l2)
			return calcSumNumber(l+l2+l1)


	if sum_arr % 3 == 2:
		if l2:
			popMin(l2)
			return calcSumNumber(l+l2+l1)
		else:
			popMin(l1)
			popMin(l1)
			return calcSumNumber(l+l1+l2)

def l9(l):
	return int(math.pow(10, l) - 1)

def getList(l, i):
	L = []
	for digit in str(i):
		L.append(int(digit))
	paddingLength = l - len(L)
	for p in range(paddingLength):
		L.insert(0, 0)
	return L



def test():
	for l in range(10):
		for i in range(l9(l)+1):
			L = getList(l, i)
			a = answer(L)
			print a, L

test()
