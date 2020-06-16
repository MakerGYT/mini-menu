// components/menu.js
Component({
	/**
	 * Component properties
	 */
	properties: {
		navs:{
			type:Array,
			value:[]
		}
	},

	/**
	 * Component initial data
	 */
	data: {
		isFold:true
	},
	/**
	 * Component methods
	 */
	methods: {
		onClickAdd: function (e) {
			this.setData({
				isFold: !this.data.isFold
			})
			if(this.data.isFold) {
				this.setData({
					maskAnimation: 'maskClose',
					btnAnimation: 'menuClose'

				})
			} else {
				this.setData({
					maskAnimation: 'maskOpen',
					btnAnimation: 'menuOpen'
				})
			}
		},
		preventdefault: function () {

		}
	}
})
