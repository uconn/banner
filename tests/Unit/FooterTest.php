<?php

use UConn\Banner\Footer\Footer;

uses(Tests\TestCase::class);

test('Footers can be created', function() {
    expect($this->footer)->toBeInstanceOf(Footer::class);
});

test('The footer class has properties', function() {
    expect($this->footer)->toHaveProperties([
        'uconnText',
        'uconnLink',
        'disclaimerText',
        'disclaimerLink',
        'accessibilityText',
        'accessibilityLink',
        'contactText',
        'contactLink'
    ]);
});

test('The footer recieves default values', function() {
    expect($this->footer->uconnText)->toBe("© University of Connecticut");
    expect($this->footer->uconnLink)->toBe("https://uconn.edu");
    expect($this->footer->disclaimerText)->toBe("Disclaimers, Privacy & Copyright");
    expect($this->footer->disclaimerLink)->toBe("https://uconn.edu/disclaimers-privacy-copyright/");
    expect($this->footer->accessibilityText)->toBe("Accessibility");
    expect($this->footer->accessibilityLink)->toBe("https://accessibility.uconn.edu/");
    expect($this->footer->contactText)->toBe("Contact Us");
    expect($this->footer->contactLink)->toBe("#");
});

test('The footer text can be changed', function() {
  expect($this->footer->uconnText)->toBe("© University of Connecticut");
  $this->footer->uconnText = 'test';
  expect($this->footer->uconnText)->toBe('test');
});