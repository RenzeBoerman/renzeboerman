import { ReactNode } from 'react'
import {
	FaEuroSign,
	FaChartLine,
	FaBox,
	FaArrowsAltV,
	FaChevronLeft,
	FaChevronUp,
	FaChevronRight,
	FaChevronDown,
	FaEllipsisH,
	FaCircleNotch,
	FaMoon,
	FaSun,
	FaCheck,
	FaSort,
	FaDotCircle,
	FaEnvelope
} from 'react-icons/fa'
import { BsGearFill, BsGithub } from 'react-icons/bs'

export type Icon = ReactNode

export const Icons = {
	ChevronLeft: FaChevronLeft,
	ChevronUp: FaChevronUp,
	ChevronRight: FaChevronRight,
	ChevronDown: FaChevronDown,
	Loading: FaCircleNotch,
	EuroSign: FaEuroSign,
	ChartLine: FaChartLine,
	PlaceHolder: FaBox,
	ArrowUpDown: FaArrowsAltV,
	ArrowLeftRight: FaArrowsAltV,
	Ellipsis: FaEllipsisH,
	Moon: FaMoon,
	Sun: FaSun,
	Sort: FaSort,
	Check: FaCheck,
	DotCircle: FaDotCircle,
	Mail: FaEnvelope,
	Gear: BsGearFill,
	Github: BsGithub
}
