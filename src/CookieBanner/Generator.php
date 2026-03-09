<?php

namespace UConn\Banner;

use League\CLImate\CLImate as Cli;

require dirname(__DIR__, 2) . '/vendor/autoload.php';
require 'CookieBanner.php';

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
        'description' => 'File path with name and extension to save cookie banner (ex ./my-cookie-banner.html)',
        'required' => true,
        'defaultValue' => './'
      ]
    ]);
    $this->cli->arguments->parse();
  }

  public function getCli() {
    return $this->cli;
  }

  public function outputBannerToFile() {
    $banner = new CookieBanner();

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
