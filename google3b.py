# https://gist.github.com/breathturn/52f20591305ab4aec74e004094ab8056
def calc_xor_of_line(start, length):

	xor_of_line = 0
	start_is_even = start%2 == 0
	is_length_even = length%2 == 0
	is_num_of_pairs_even = length/2 % 2 == 0

	if length == 0:
		return 0
	if length == 1:
		return start
	# if length == 2:
	# 	return start ^ (start+1)
	if start == 0:
		if is_length_even:
			if is_num_of_pairs_even:
				return 1
			else:
				return 0
		else:
			if is_num_of_pairs_even:
				return 1 ^ (start + length - 1) ^ 1
			else:
				return 1 ^ (start + length - 1) ^ 0
	if start_is_even:
		if is_length_even:
			if is_num_of_pairs_even:
				return 0
			else:
				return 1
		else:
			if is_num_of_pairs_even:
				return (start + length - 1) ^ 0
			else:
				return (start + length - 1) ^ 1

	if not start_is_even and is_length_even:
		if is_num_of_pairs_even:
			return start ^ (start+length-1) ^ 1
		else:
			return start ^ (start+length-1) ^ 0

	if not start_is_even and not is_length_even:
		if is_num_of_pairs_even:
			return start ^ 0
		else:
			return start ^ 1

	return xor_of_line

def answer(start, length):
    xor_of_triangle = 0
    n = length
    for i in range(length):
        xor_of_triangle ^= calc_xor_of_line(start, n)
        n -= 1
        start += length
    return xor_of_triangle

print answer(17, 4)
print calc_xor_of_line(2, 11)
