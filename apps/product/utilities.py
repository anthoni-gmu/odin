
import random

def randomProducts(products,num=3):
    try:

        if len(products) >= num:
                products = random.sample(products, num)
    except:
        products=products
             
    return products