export const HOME = '/';
export const SHOP = '/shop';
export const WISHLIST = `${ SHOP }/wishlist`;
export const PRODUCT_SINGLE = `${ SHOP }/product_single`;
export const SHOP_CART = '/cart';
export const CHECKOUT = `${ SHOP }/checkout`;
export const ABOUT = '/about';
export const BLOG= '/blog';
export const CONTACT= '/contact';
export const CART = '/cart';

export const NAVIGATION = [
	{
		title: 'Home',
		url: HOME,
		home: true,
	},
	{
		title: 'shop',
		url: SHOP,
        home: true,
        children: [
            {
                title: 'wishlist',
                url: WISHLIST,
                home: true,
            },
            {
                title: 'product_single',
                url: PRODUCT_SINGLE,
                home: true,
            },
            {
                title: 'cart',
                url: SHOP_CART,
                home: true,
            },
            {
                title: 'checkout',
                url: CHECKOUT,
                home: true,
            },
        ]
	},
	{
		title: 'about',
		url: ABOUT,
		home: true,
	},
	{
		title: 'blog',
		url: BLOG,
		home: true,
	},
	{
		title: 'contact',
		url: CONTACT,
		home: true,
    },
    {
		title: 'cart',
		url: CONTACT,
		home: true,
	},
];