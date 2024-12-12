import { FlatList, View } from "react-native";
import { Category } from "../category";
import { s } from "./styles";

export type CategoryProps = {
	id: string;
	name: string
}[]

type Props = {
	data: CategoryProps
}


export function Categories({ data }: Props) {
	
	return (
		<FlatList 
		data={data}
		keyExtractor={(item) => item.id}
		renderItem={({item}) => <Category iconId={item.id} name={item.name}/>}
		horizontal
		showsHorizontalScrollIndicator={false}
		contentContainerStyle={s.content}
		style={s.content}
		/>
	)
}