import * as ghpages from 'gh-pages'

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'main',
        repo: 'https://github.com/Windsmith/personal-site.git', // Update to point to your repository
        user: {
            name: 'Shriram', // update to use your name
            email: 'shriramsekar11@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);