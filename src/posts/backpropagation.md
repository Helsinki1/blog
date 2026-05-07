## what is backpropagation?

Backpropagation is the algorithm used to compute gradients of a loss function with respect to network weights. It applies the chain rule of calculus to propagate errors backward through the network.

## the chain rule

For a composition of functions $f(g(x))$, the derivative is:

$$\frac{df}{dx} = \frac{df}{dg} \cdot \frac{dg}{dx}$$

## computation graph

In a neural network, each operation (matrix multiply, activation, loss) is a node in a directed acyclic graph. The forward pass computes the output; the backward pass computes gradients.

## a simple example

Consider a single neuron: $y = \sigma(w \cdot x + b)$

The gradient of the loss $L$ with respect to $w$:

$$\frac{\partial L}{\partial w} = \frac{\partial L}{\partial y} \cdot \sigma'(z) \cdot x$$

where $z = w \cdot x + b$.

*More to come...*
