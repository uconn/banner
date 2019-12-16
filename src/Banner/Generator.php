<?php

namespace UConn\Banner;

require dirname(__DIR__, 2) . '/vendor/autoload.php';
require 'Banner.php';

use Garden\Cli\Cli;

class Generator {
  protected $args;

  public function createArguments() {
    global $argv;
    $cli = new Cli();
    $cli->description('Small command line utility to generate UConn banner markup')
      ->opt('path:p', 'File path with name to save banner', true)
      ->opt('department:d', 'The department to display', false)
      ->opt('abbreviation:a', 'An abbreviation for long department names. Will be visible on mobile devices', false)
      ->opt('url:u', 'Department url', false)
      ->opt('alternative:v', 'Whether to use the school and college banner type', false, 'bool')
      ->opt('a-z-dropdown', 'Whether to add markup for an A-Z dropdown/popup. Default - false', false, 'bool')
      ->opt('a-z-url', 'Url for the site\'s a-z index page', false)
      ->opt('use-mobile:m', 'Whether to use a mobile menu icon in the banner. Default - false', false, 'bool')
      ->opt('mobile-id', 'Set an ID attribute for the mobile menu', false, 'string')
      ->opt('header:r', 'Alternative site header', false);

    $this->args = $cli->parse($argv, true);
  }

  public function outputBannerToFile() {
    $banner = new Banner();
    $banner->department = $this->args->getOpt('department');
    $banner->department_abbreviation = $this->args->getOpt('abbreviation');
    $banner->url = $this->args->getOpt('url');
    $banner->alternative = $this->args->getOpt('alternative', false);
    $banner->a_z_dropdown = $this->args->getOpt('a-z-dropdown', false);
    $banner->a_z_url = $this->args->getOpt('a-z-url');
    $banner->use_mobile_menu =  $this->args->getOpt('use-mobile', false);
    $banner->mobile_menu_id = $this->args->getOpt('mobile-id');
    $banner->header = $this->args->getOpt('header');
    file_put_contents($this->args->getOpt('path'), $banner);
  }
}

$g = new Generator();
$g->createArguments();
$g->outputBannerToFile();