# Plamo

A Python package providing simple greeting functionality.

## Installation

You can install Plamo using pip:

```bash
pip install -e .
```

## Usage

```python
from plamo import greet

# Default greeting
print(greet())  # Output: Hello, World!

# Custom greeting
print(greet("Alice"))  # Output: Hello, Alice!
```

## Development

### Setup

1. Clone the repository:
```bash
git clone https://github.com/donbreo/plamo.git
cd plamo
```

2. Install in development mode:
```bash
pip install -e .
```

3. Install development dependencies:
```bash
pip install pytest
```

### Running Tests

Run the test suite using pytest:

```bash
pytest
```

## License

MIT License - see LICENSE file for details.
