import math

def answer(L):
	if 1 <= area <= 1000000:
		solarPanelsList = []
		diff = area
		while(diff > 0):
			solarPanel = int(math.sqrt(diff)//1)
			solarPanelSqr = solarPanel * solarPanel
			solarPanelsList.append(solarPanelSqr)
			diff = diff - (solarPanelSqr)
		return solarPanelsList
	else:
		return []
