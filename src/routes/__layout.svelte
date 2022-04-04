<script>
	import { onMount } from 'svelte';
	import '../tailwind.css';
	import Particles from 'svelte-particles';
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

	const storageKey = 'user-theme';

	let preference;
	// Persist user preference
	$: preference && localStorage.setItem(storageKey, JSON.stringify(preference));

	function toggle() {
		preference = preference === 'light' ? 'dark' : 'light';
	}

	// localStorage and window is only available in the browser

	let particlesUrl = 'http://foo.bar/particles.json';

	let particlesConfig = {
		fpsLimit: 60,
		particles: {
			number: {
				value: 0,
				density: {
					enable: true,
					value_area: 800
				}
			},
			color: {
				value: preference === 'dark' ? '#F3F4F6' : '#110000',
				animation: {
					enable: true,
					speed: -0.0001,
					sync: true
				}
			},
			shape: {
				type: 'circle'
			},
			opacity: {
				value: 1,
				random: false,
				animation: {
					enable: true,
					speed: 0.5,
					minimumValue: 0,
					sync: false
				}
			},
			size: {
				value: 10,
				random: { enable: true, minimumValue: 2 },
				animation: {
					enable: false,
					speed: 20,
					minimumValue: 4,
					sync: false
				}
			},
			life: {
				duration: {
					value: 20
				},
				count: 1
			},
			move: {
				angle: {
					value: 45,
					offset: 0
				},
				enable: true,
				gravity: {
					enable: true,
					acceleration: -0.5
				},
				speed: 0.5,
				direction: 'y',
				random: false,
				straight: false,
				size: true,
				outModes: {
					default: 'destroy',
					bottom: 'none'
				},
				attract: {
					enable: false,
					distance: 300,
					rotate: {
						x: 600,
						y: 1200
					}
				}
			}
		},
		interactivity: {
			detectsOn: 'canvas',
			events: {
				resize: true
			}
		},
		detectRetina: true,
		emitters: {
			direction: 'top',
			rate: {
				quantity: 0.2,
				delay: 0.01
			},
			size: {
				width: 100,
				height: 10
			},
			position: {
				x: 50,
				y: 100
			}
		}
	};

	onMount(() => {
		preference = JSON.parse(localStorage.getItem(storageKey));
		if (!preference) {
			preference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}

		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', ({ matches: isDark }) => {
				preference = isDark ? 'dark' : 'light';
			});
	});

	$: particlesConfig.particles.color.value = preference === 'dark' ? '#F3F4F6' : '#111827';

	let onParticlesLoaded = (event) => {
		const particlesContainer = event.detail.particles;
		particlesContainer.play();
		// you can use particlesContainer to call all the Container class
		// (from the core library) methods like play, pause, refresh, start, stop
	};

	let onParticlesInit = (main) => {
		// you can use main to customize the tsParticles instance adding presets or custom shapes
	};
</script>

<div class={preference}>
	<div class="z-50 grid bg-gray-100 dark:bg-zinc-900 place-items-center min-h-screen min-w-screen">
		<Particles
			id="tsparticles"
			options={particlesConfig}
			on:particlesLoaded={onParticlesLoaded}
			on:particlesInit={onParticlesInit}
			class="z-100"
		/>

		<button
			class="btn bg-zinc-900 dark:bg-gray-100 dark:text-zinc-900 font-worksans mr-4 mt-3 text-base md:text-2xl 2xl:text-4xl shadow-xl z-0 rounded-full m-auto"
			on:click={toggle}
		>
			<Icon data={preference === 'dark' ? faSun : faMoon} scale="1.3" />
		</button>

		<slot />
	</div>
</div>
