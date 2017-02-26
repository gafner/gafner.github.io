def answer(M, F):
	G = 0
	M = int(M)
	F = int(F)
	while 1:
		if F < 1 or M < 1:
			return 'impossible'
		elif F == M:
			if F == 1:
				return str(G)
			else:
				return 'impossible'
		if M > F:
			if F == 1:
				return str(G+M-1)
			G += M/F
			M = M%F


		elif F > M:
			if M == 1:
				return str(G+F-1)
			G += F/M
			F = F%M


	return str(G)


print answer('33', '55')
# print answer(44310, 10**22)
# print answer(7, 4)
# print type(answer(7, 4))
# print answer(7, 4)
# print answer(4, 7)
# print answer(7, 4)
# print answer(2, 2)
# print answer(1, 2)
