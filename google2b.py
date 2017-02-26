def answer(h, q):
	p = []
	for n in q:
		height = h
		if height <= 1:
			p.append(-1)
		else:
			root = (2**h) - 1
			if n > root:
				p.append(-1)
			elif n == root:
				p.append(-1)
			else:
				while 1:
					if height < 1:
						p.append(-1)
						break
					left = root - 2**(height-1)
					right = root - 1
					if n == left or n == right:
						p.append(root)
						break
					elif n < left:
						root = left
						height-=1
					elif n < right:
						root = right
						height-=1
					else:
						p.append(-1)
						break
	return p


print answer(5, [15, 6, 7, 2-1, 3-1, 31, 1, 2,3,4,5,6,7,8,9,1-1])
