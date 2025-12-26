
```js
shoppingCart.splice((shoppingCart.indexOf('Tea'),1,'Green Tea'));
```

The problem is **these extra parentheses `()`**.

Inside them, JavaScript uses the **comma operator**, which means:

> it evaluates everything but returns **only the last value**

So this part:

```js
(shoppingCart.indexOf('Tea'), 1, 'Green Tea')
```

actually evaluates to:

```js
'Green Tea'
```

That means your code becomes:

```js
shoppingCart.splice('Green Tea');
```

Which makes no sense to `splice()`