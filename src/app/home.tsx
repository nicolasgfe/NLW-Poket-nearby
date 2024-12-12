import { Alert, Text, View } from "react-native";


import {api} from "@/services/api"
import { useEffect, useState } from "react";

import { Categories, CategoryProps } from "@/components/categories";


export default function Home() {
	const [categories, setCategories] = useState<CategoryProps>([])

	async function fetchCategories() {
		try {
			const { data } = await api.get("/categories")
			setCategories(data);
			
		} catch (error) {
			console.log(error)
			Alert.alert("Categorias", "Não foi possível carregar as categorias")
		}
	}

	useEffect(() => {
		fetchCategories()
	}, [])
	return (
		<View style={{ flex: 1 }}>
			<Categories data={categories}/>
		</View>
	)
}