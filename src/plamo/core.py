"""Core functionality for Plamo."""


def greet(name: str = "World") -> str:
    """
    Generate a greeting message.
    
    Args:
        name: The name to greet. Defaults to "World".
    
    Returns:
        A greeting message string.
    
    Examples:
        >>> greet()
        'Hello, World!'
        >>> greet("Alice")
        'Hello, Alice!'
    """
    return f"Hello, {name}!"
