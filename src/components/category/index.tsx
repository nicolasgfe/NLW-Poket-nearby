import { Pressable, PressableProps, Text, } from "react-native"
import { s } from "./styles"
import { categoriesIcons } from "@/utils/categories-icons"
import { Icon123, IconToolsKitchen2 } from "@tabler/icons-react-native"

import { colors } from "@/styles/colors"
type Props = PressableProps & {
	iconId: string,
	isSelected?: boolean,
	name: string
}

export function Category({ iconId, name, isSelected = false, ...rest }: Props) {
	const Icon = categoriesIcons[iconId]

	return (
		<Pressable style={[s.container, isSelected && s.containerSelected]} {...rest}>
			<Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
			<Text style={[s.name, isSelected && s.nameSelected]}>{name}</Text>
		</Pressable>
	)
}