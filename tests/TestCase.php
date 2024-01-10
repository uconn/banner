<?php

namespace Tests;

use UConn\Banner\Banner;
use UConn\Banner\Footer\Footer;
use PHPUnit\Framework\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase {
    public $banner;
    public $alternative_banner;
    public $bannerMarkup;
    public $alternativeMarkup;

    public $footer;
    protected function setUp(): void {
        parent::setUp();
        $this->banner = new Banner();
        $this->alternative_banner = new Banner();
        $this->alternative_banner->alternative = true;
        $this->bannerMarkup = $this->banner->__toString();
        $this->alternativeMarkup = $this->alternative_banner->__toString();
        $this->footer = new Footer();
    }
}
