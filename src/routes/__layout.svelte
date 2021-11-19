<script>
	import '../tailwind.css';
	import Particles from 'svelte-particles';

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
				value: '#110000',
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

<body class="bg-gray-100 h-screen w-screen z-50 grid place-items-center">
	<Particles
		id="tsparticles"
		options={particlesConfig}
		on:particlesLoaded={onParticlesLoaded}
		on:particlesInit={onParticlesInit}
		class="z-0"
	/>

	<slot />
</body>
