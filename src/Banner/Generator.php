<?php

namespace UConn\Banner;

require dirname(__DIR__, 2) . '/vendor/autoload.php';
require 'Banner.php';

use League\CLImate\CLImate as Cli;

class Generator {

  protected $cli;

  public function __construct()
  {
    $this->cli = new Cli();
    $this->cli->description('Small command line utility to generate UConn banner markup');
    $this->cli->arguments->add([
      'help' => [
        'longPrefix'  => 'help',
        'description' => 'Prints a usage statement',
        'noValue'     => true,
      ],
      'path' => [
        'prefix' => 'p',
        'longPrefix' => 'path',
        'description' => 'File path with name to save banner (ex ./my-banner.html)',
        'required' => true,
        'defaultValue' => './'
      ],
      'school-college' => [
        'prefix' => 's',
        'longPrefix' => 'school-college',
        'description' => 'The school/college to display'
      ],
      'abbreviation' => [
        'prefix' => 'a',
        'longPrefix' => 'abbreviation',
        'description' => 'An abbreviation for long school/college names. Will be visible on mobile devices'
      ],
      'url' => [
        'prefix' => 'u',
        'longPrefix' => 'url',
        'description' => 'School/college url'
      ],
      'alternative' => [
        'prefix' => 'v',
        'longPrefix' => 'alternative',
        'description' => 'Whether to use the school and college banner type',
        'defaultValue' => false,
        'castTo' => 'bool'
      ],
      'a-z-dropdown' => [
        'longPrefix' => 'a-z-dropdown',
        'description' => 'Whether to add markup for an A-Z dropdown/popup. Default - false',
        'defaultValue' => false,
        'castTo' => 'bool'
      ],
      'a-z-url' => [
        'longPrefix' => 'a-z-url',
        'description' => 'Url for the site\'s a-z index page'
      ],
      'use-mobile' => [
        'shortPrefix' => 'm',
        'longPrefix' => 'use-mobile',
        'description' => 'Whether to use a mobile menu icon in the banner. Default - false',
        'defaultValue' => false,
        'castTo' => 'bool'
      ],
      'mobile-id' => [
        'longPrefix' => 'mobile-id',
        'description' => 'Set an ID attribute for the mobile menu',
      ],
      'header' => [
        'prefix' => 'r',
        'longPrefix' => 'header',
        'description' => 'Alternative site header'
      ],
      'invert-banner-color' => [
        'prefix' => 'i',
        'longPrefix' => 'invert-banner-color',
        'description' => 'Whether to use a white banner with blue text',
        'castTo' => 'bool'
      ]
    ]);
    $this->cli->arguments->parse();
  }

  public function getCli() {
    return $this->cli;
  }

  public function outputBannerToFile() {
    $banner = new Banner();
    $banner->school = $this->cli->arguments->get('school-college');
    $banner->school_abbreviation = $this->cli->arguments->get('abbreviation');
    $banner->url = $this->cli->arguments->get('url');
    $banner->alternative = $this->cli->arguments->get('alternative');
    $banner->a_z_dropdown = $this->cli->arguments->get('a-z-dropdown');
    $banner->a_z_url = $this->cli->arguments->get('a-z-url');
    $banner->use_mobile_menu =  $this->cli->arguments->get('use-mobile');
    $banner->mobile_menu_id = $this->cli->arguments->get('mobile-id');
    $banner->header = $this->cli->arguments->get('header');
    $banner->invert_banner_color = $this->cli->arguments->get('invert-banner-color');

    // strip the head matter from the final output
    $pattern = '/(---[\n\r])[\w:. ]*/i';
    $banner = preg_replace($pattern, '', $banner);

    file_put_contents($this->cli->arguments->get('path'), $banner);
  }
}

$g = new Generator();
$cli = $g->getCli();

if ($cli->arguments->get('help')) {
  $cli->usage();
} else {
  $g->outputBannerToFile();
}