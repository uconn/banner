<?php

uses(Tests\TestCase::class);

use UConn\Banner\Banner;

test('Banners can be created', function() {
    expect($this->banner)->toBeInstanceOf(Banner::class);
    expect($this->alternative_banner)->toBeInstanceOf(Banner::class);
});

test('The banner class has properties', function() {
    expect($this->banner)->toHaveProperties([
            'name',
            'school',
            'school_abbreviation',
            'url',
            'header',
            'search',
            'alternative',
            'a_z_dropdown',
            'a_z_url',
            'use_mobile_menu',
            'mobile_menu_id',
            'invert_banner_color'
        ]);
});

test('The banner recieves default values', function() {
    expect($this->banner->name)->toBe('UConn Banner');
    expect($this->banner->school)->toBe('University Communications');
    expect($this->banner->school_abbreviation)->toBe('UComm');
    expect($this->banner->url)->toBe('https://communications.uconn.edu');
    expect($this->banner->header)->toBe(true);
    expect($this->banner->search)->toContain("<form class='form-search'><input type='text' class='input-medium' placeholder='Search this site...'><button type='submit' class='btn'>Search</button></form>");
    expect($this->banner->alternative)->toBe(false);
    expect($this->banner->a_z_dropdown)->toBe(true);
    expect($this->banner->a_z_url)->toBe('');
    expect($this->banner->use_mobile_menu)->toBe(true);
    expect($this->banner->mobile_menu_id)->toBe('banner-controlled-mobile-menu');
    expect($this->banner->invert_banner_color)->toBe(false);
});

// also tests the general ability of the banner to set properties.
test('The banner can be set to alternative', function() {
    expect($this->banner->alternative)->toBe(false);
    $this->banner->alternative = true;
    expect($this->banner->alternative)->toBe(true);
});