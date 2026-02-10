"""Tests for Plamo core functionality."""

import pytest
from plamo import greet
from plamo.core import greet as core_greet


def test_greet_default():
    """Test greet with default parameter."""
    result = greet()
    assert result == "Hello, World!"


def test_greet_with_name():
    """Test greet with a custom name."""
    result = greet("Alice")
    assert result == "Hello, Alice!"


def test_greet_with_empty_string():
    """Test greet with an empty string."""
    result = greet("")
    assert result == "Hello, !"


def test_greet_from_core():
    """Test that greet is accessible from core module."""
    result = core_greet("Bob")
    assert result == "Hello, Bob!"
