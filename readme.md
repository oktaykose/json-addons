![json-addons](https://img.techpowerup.org/201028/json-addons.png)
There are simple and useful functions developed for JSONs. It is developed for javascript only.

`$ npm i json-addons`


### Addons

#### filterByValue
JSON data only if the isIncluded value is true according to the value of the key you specified, shows those that contain that value. If false, shows those that don't contain that value.

##### How to use ?
```js
import { filterByValue } from 'json-addons'

let Obj = [
    {
        id: 1,
        productName: 'Cheap 15.6 Inch Computer 8GB+512GB 1920*1080 FHD IPS Laptops Computer'
    },
    {
        id: 2,
        productName: 'Global Custom  Ultra Thin Notebook 8GB 2.4GHZ Dual Core Wins10 Mini'
    },
    {
        id: 3,
        productName: '15.6 inch Ultrabook Intel J4105 IPS 8GB office 512GB computer laptops'
    },
    {
        id: 4,
        productName: 'Laptop computer, ready to ShipIn Stock Fast Dispatch cheap netbook'
    }
]

let useObj = Obj.filterByValue('productName', 'computer')

// useObj Output:
[
    {
        id: 1,
        productName: 'Cheap 15.6 Inch Computer 8GB+512GB 1920*1080 FHD IPS Laptops Computer'
    },
    {
        id: 3,
        productName: '15.6 inch Ultrabook Intel J4105 IPS 8GB office 512GB computer laptops'
    },
    {
        id: 4,
        productName: 'Laptop computer, ready to ShipIn Stock Fast Dispatch cheap netbook'
    }
]
```

##### Also
```js
filterByValue(key, value, isIncluded)
//isIncluded, default value true
```

----

#### sortByValue
It ensures that JSON is sorted correctly by making a letter-based search with the key and key value you specify. It also checks if the specified value exists in json.

##### How to use ?
```js
import { sortByValue } from 'json-addons'

let Obj = [{
        id: 1,
        productName: 'Cheap 15.6 Inch Computer 8GB+512GB 1920*1080 FHD IPS Laptops Computer'
    },
    {
        id: 2,
        productName: 'Global Custom  Ultra Thin Notebook 8GB 2.4GHZ Dual Core Wins10 Mini'
    },
    {
        id: 3,
        productName: '15.6 inch Ultrabook Intel J4105 IPS 8GB office 512GB computer laptops'
    },
    {
        id: 4,
        productName: 'Laptop computer, ready to ShipIn Stock Fast Dispatch cheap netbook'
    }
]

let useObj = Obj.sortByValue('productName', 'laptop')

// useObj Output:
[{
    "id": 4,
    "productName": "Laptop computer, ready to ShipIn Stock Fast Dispatch cheap netbook"
}, {
    "id": 1,
    "productName": "Cheap 15.6 Inch Computer 8GB+512GB 1920*1080 FHD IPS Laptops Computer"
}, {
    "id": 3,
    "productName": "15.6 inch Ultrabook Intel J4105 IPS 8GB office 512GB computer laptops"
}, {
    "id": 2,
    "productName": "Global Custom  Ultra Thin Notebook 8GB 2.4GHZ Dual Core Wins10 Mini"
}]
```

----

> You can always share your ideas, suggestions and opinions with us.
> json.addons@gmail.com
