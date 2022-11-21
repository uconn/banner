<?php

namespace UConn\Banner\Footer;

use Liquid\Template;

class Footer {
  private $uconnText;
  private $uconnLink;
  private $disclaimerText;
  private $disclaimerLink;
  private $accessibilityText;
  private $accessibilityLink;
  private $contactText;
  private $contactLink;

  public function __construct()
  {
    $config = file_get_contents(dirname(__FILE__, 3) . '/_data/footerConfig.json');

    $settings = json_decode($config, true);
    $this->uconnText = $settings['uconnText'];
    $this->uconnLink = $settings['uconnLink'];
    $this->disclaimerText = $settings['disclaimerText'];
    $this->disclaimerLink = $settings['disclaimerLink'];
    $this->accessibilityText = $settings['accessibilityText'];
    $this->accessibilityLink = $settings['accessibilityLink'];
    $this->contactText = $settings['contactText'];
    $this->contactLink = $settings['contactLink'];
  }

  public function buildVars() {
    return [
        'footerConfig' => [
        'uconnText' => $this->uconnText,
        'uconnLink' => $this->uconnLink,
        'disclaimerText' => $this->disclaimerText,
        'disclaimerLink' => $this->disclaimerLink,
        'accessibilityText' => $this->accessibilityText,
        'accessibilityLink' => $this->accessibilityLink,
        'contactText' => $this->contactText,
        'contactLink' => $this->contactLink
      ]
    ];
  }

  public function __toString()
  {
    $liquid = new Template();
    return $liquid->parse(file_get_contents(dirname(__FILE__) . '/../../_includes/footer.html'))->render($this->buildVars());
  }

  public function __set($index, $val)
  {
    if (property_exists($this, $index)) {
      $this->$index = $val;
    }
  }

  public function __get($index)
  {
    if (property_exists($this, $index)) {
      return $this->$index;
    }
  }

}