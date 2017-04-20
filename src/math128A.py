
def newtons( sp , f, fp, tol):
	i = 1
	p1 = sp
	p0 = 0
	print('p0 is' + str(sp))
	while abs(p0-p1) > tol:
		p0 = p1
		p1 = p0 - (f(p0)/fp(p0))
		print('p' + str(i) + 'is' + str(p1))
		i += 1
