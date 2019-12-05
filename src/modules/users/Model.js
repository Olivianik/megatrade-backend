/* **************************************************************************
 * Copyright(C) Mega Trade Website, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Abdeen Mohamed < abdeen.mohamed@outlook.com>, September 2019
 ************************************************************************** */

import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema(
	{
		city: {
			type: String,
			default: ''
		},
		email: {
			type: String,
			unique: true,
			required: true
		},
		avatar: {
			type: String,
			default: ''
		},
		number: {
			type: String,
			default: ''
		},
		status: {
			type: String,
			default: '30'
		},
		country: {
			type: String,
			default: ''
		},
		lastName: {
			type: String,
			default: ''
		},
		password: {
			type: String
		},
		firstName: {
			type: String,
			default: ''
		},
		package: {
			type: String,
			default: 'Free Package'
		},
		packageAmount: {
			type: String,
			default: '0.00'
		},
		notifications: {
			alerts: {
				dashboard: {
					type: Boolean,
					default: true
				},
				email: {
					type: Boolean,
					default: true
				},

				textMessages: {
					type: Boolean,
					default: true
				},
				phoneCalls: {
					type: Boolean,
					default: true
				}
			},
			promotions: {
				dashboard: {
					type: Boolean,
					default: true
				},
				email: {
					type: Boolean,
					default: true
				},

				textMessages: {
					type: Boolean,
					default: true
				},
				phoneCalls: {
					type: Boolean,
					default: true
				}
			},
			partnerPromotions: {
				dashboard: {
					type: Boolean,
					default: true
				},
				email: {
					type: Boolean,
					default: true
				},

				textMessages: {
					type: Boolean,
					default: true
				},
				phoneCalls: {
					type: Boolean,
					default: true
				}
			}
		}
	}
)

export default mongoose.model('users', UserSchema)
