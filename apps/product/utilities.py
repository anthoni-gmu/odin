
import random

def randomProducts(products,num=3):
    
    if len(products) >= num:
            products = random.sample(products, num)

    return products