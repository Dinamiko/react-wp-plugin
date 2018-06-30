<?php

namespace ReactPlugin;

class Plugin
{

	/**
	 * @var int
	 */
	private $page_id;

    /**
     * Initializes the plugin.
     * @return void
     */
    public function init()
    {
        add_action('admin_menu', [$this, 'admin_menu']);
        add_action('admin_enqueue_scripts', [$this, 'enqueue_scripts']);
    }

	/**
	 * Creates admin menu.
	 * @wp-hook admin_menu
	 * @return void
	 */
	public function admin_menu()
	{

		$this->page_id = add_menu_page(
			'React Plugin',
			'React Plugin',
			'manage_options',
			'reactplugin',
			[$this, 'render_menu']
		);
	}

	/**
	 * Renders admin menu.
	 * @return void
	 */
	public function render_menu()
	{ ?>
		<div class="wrap">
			<div id="app"></div>
		</div>
	<?php }

	/**
	 * Enqueue plugin scripts.
	 * @param $hook
	 * @return void
	 */
	public function enqueue_scripts($hook)
	{

		global $wp_version;

		if ($this->page_id === $hook) {

			wp_enqueue_script(
				'reactplugin',
				plugin_dir_url(__FILE__) . '../build/app.js',
				[],
				$wp_version,
				true
			);

			wp_localize_script('reactplugin', 'wpApiSettings', array(
				'root' => esc_url_raw(rest_url()),
				'nonce' => wp_create_nonce('wp_rest')
			));
		}
	}
}
