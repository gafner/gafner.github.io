# 90 - 0
# 81 - 1
# 72 - 2
# 63 - 3
# 	30 - 4

def countPossibleStaircase(n, d):
	c = 0
	if n == 3:
		return 1
	elif n < 3:
		return 0

	if d != 0:
		c += 1
	if d > 3:
		c += countPossibleStaircase(d, 0)
	if d == 3:
		c += 1

	nextN = n-1
	nextD = d+1

	if nextN == nextD:
		c += countPossibleStaircase(nextN, 0)
	elif nextN > nextD:
		if nextD >= 3:
			c += countPossibleStaircase(d, 0)
		c += countPossibleStaircase(nextN, nextD)
	# elif nextN < nextD:
	# 	pass
	return c

def answer(n):
	count = countPossibleStaircase(n , 0)
	print n, count
	return count

answer(0)
answer(1)
answer(2)
answer(3)
answer(4)
answer(5)
answer(6)
answer(7)
answer(8)
answer(9)
# answer(10)
# answer(11)
# answer(12)
# answer(20)
#
answer(200)
# # print answer(6)
# # print answer(7)
# # print answer(8)
# # print answer(9)
