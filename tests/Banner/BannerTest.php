<?php
declare(strict_types=1);

use PHPUnit\Framework\TestCase;
use SteveGrunwell\PHPUnit_Markup_Assertions\MarkupAssertionsTrait;
use UConn\Banner\Banner;

class BannerTest extends TestCase {
    use MarkupAssertionsTrait;

    /** @test */
    public function banners_can_be_created(): void {
        $banner = new Banner();
        $alt_banner = new Banner();
        $alt_banner->alternative = true;
        $this->assertInstanceOf(Banner::class, $banner);
        $this->assertInstanceOf(Banner::class, $alt_banner);
    }

    /** @test */
    public function a_standard_banner_has_a_wordmark(): void {
        $banner = new Banner();
        $banner->alternative = false;

        $this->assertContainsSelector('#wordmark', $banner, 'wordmark element did not have the correct ID');
        $this->assertStringContainsString('UConn', $banner->__toString(), 'Banner did not contain the UCONN wordmark');
        $this->assertContainsSelector('#university-of-connecticut', $banner, 'university of connecticut element did not contain the correct ID');
        $this->assertStringContainsString('University of Connecticut', $banner->__toString(), 'Banner did not contain the UCONN wordmark');
    }

    /** @test */
    public function a_standard_banner_should_link_to_uconn(): void {
        $banner = new Banner();
        $banner->alternative = false;
        $banner->header = false;

        $this->assertHasElementWithAttributes([
            'href' => 'https://uconn.edu/'
        ], $banner->__toString(), 'Banner did not contain the uconn.edu link');
    }

    /** @test */
    public function an_alternative_banner_can_have_a_departmental_wordmark(): void {
        $banner = new Banner();

        $banner->alternative = true;
        $banner->department = 'Test Department';
        $banner->department_abbreviation = 'Abbreviation';

        $this->assertStringContainsString('Test Department', $banner->__toString(), 'Banner did not contain the departmental wordmark');
        $this->assertStringContainsString('Abbreviation', $banner->__toString(), 'Banner did not contain the departmental abbreviation');
    }
    /** @test */
    public function an_alternative_banner_should_link_to_dept_site(): void
    {
        $banner = new Banner();
        $banner->header = false;
        $banner->alternative = true;
        $banner->department_url = 'https://communications.uconn.edu/';

        $this->assertHasElementWithAttributes([
            'href' => 'https://communications.uconn.edu/'
        ], $banner->__toString(), 'Banner did not contain the example link');
    }

    /** @test */
    public function the_button_container_should_contain_five_svgs(): void {
        /**
         * 
         * 2 search icons
         * 1 a-z icon
         * 1 menu icon
         * 1 close menu icon
         * 
         */
        $banner = new Banner();
        $this->assertSelectorCount(5, '#button-container svg', $banner->__toString(), 'Banner did not contain 5 svgs in button container');
    }

    /** @test */
    public function banner_buttons_have_aria_controls_attributes(): void {
        $banner = new Banner();
        $banner->alternative = true;

        // test the buttons for aria controls
        $this->assertHasElementWithAttributes([
            'aria-controls' => 'search-popup',
            'aria-controls' => 'a-z-popup',
            'aria-controls' => 'banner-controlled-mobile-menu'
        ], $banner->__toString(), 'Did not contain the aria-controls attribute');
    }

    /** @test */
    public function a_banner_should_have_popups_with_ids(): void {
        $banner = new Banner();

        $this->assertContainsSelector('#search-popup', $banner, 'Banner did not contain the search-popup ID');
        $this->assertContainsSelector('#a-z-popup', $banner, 'Banner did not contain the a-z-popup ID');
    }

    /** @test */
    public function a_banner_should_not_contain_a_mobile_menu(): void {
        $banner = new Banner();

        $this->assertNotContainsSelector('banner-controlled-mobile-menu', $banner, 'The banner should not contain a mobile menu');
    }
}