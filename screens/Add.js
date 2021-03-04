import React from 'react'
import {
    View,
    Image,
    FlatList,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput, KeyboardAvoidingView
} from "react-native";
import { connect } from 'react-redux'
import * as ImagePicker from 'react-native-image-picker';
import Input from '../components/Input'
import { COLORS, SIZES, FONTS, images, icons } from "../constants";
import { addBook } from '../redux/actions';

const Add = ({ navigation, dispatch }) => {

    const [response, setResponse] = React.useState(null)

    const [form, setForm] = React.useState({})

    function renderHeader() {

        return (
            <View style={styles.headerView}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image source={icons.arrowBack} />
                </TouchableOpacity>

                <Text style={{ marginLeft: 15, ...FONTS.body3 }}>Adicionar livro</Text>
            </View>
        )
    }

    function renderForm() {

        function getImage() {
            ImagePicker.launchImageLibrary(
                {
                    mediaType: 'photo',
                    includeBase64: false,
                },
                response => {
                    setResponse(response);
                    setForm({ ...form, cover: response.uri })
                }
            )
        }

        return (
            <View
                style={{ marginVertical: SIZES.padding * 2 }}>

                <View style={{ display: "flex", alignItems: "center" }}>
                    <View style={{ width: 240 }}>
                        <View style={styles.image}>
                            {response
                                ?
                                <Image
                                    style={{ width: 240, height: 280 }}
                                    source={{ uri: response.uri }}
                                />
                                :
                                <Image
                                    style={{ width: 240, height: 280 }}
                                    source={images.noImage}
                                />
                            }
                        </View>

                        <TouchableOpacity
                            style={{ position: "absolute", bottom: 0, right: 0 }}
                            onPress={() => { getImage() }}
                        >
                            <View style={styles.imageSelect}>
                                <Image
                                    source={icons.image}
                                    resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>


                <Input placeholder="Título"
                    onChangeText={(text) => {
                        setForm({ ...form, title: text })
                    }}
                />

                <Input
                    placeholder="Descrição"
                    multiline={true}
                    textAlignVertical="top"
                    onChangeText={(text) => {
                        setForm({ ...form, description: text })
                    }}
                />
                <Input placeholder="Autor"
                    onChangeText={(text) => {
                        setForm({ ...form, author: text })
                    }}
                />
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>

                    <Input
                        width={130}
                        keyboardType="numeric"
                        placeholder="Página corrente"
                        onChangeText={(text) => {
                            setForm({ ...form, currentPage: text })
                        }}
                    />

                    <Input
                        width={130}
                        keyboardType="numeric"
                        placeholder="Total de páginas"
                        onChangeText={(text) => {
                            setForm({ ...form, pages: text })
                        }}
                    />
                </View>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <TouchableOpacity
                        onPress={() => {
                            dispatch(addBook(form))
                            navigation.navigate("Home")
                        }}
                    >
                        <View style={styles.button}>
                            <Text
                                style={{
                                    textAlign: "center",
                                    color: COLORS.white
                                }}>Guardar livro
                        </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Home")}
                    >
                        <View style={[styles.button, { backgroundColor: COLORS.red }]}>
                            <Text
                                style={{
                                    textAlign: "center",
                                    color: COLORS.white
                                }}>Cancelar
                        </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <KeyboardAvoidingView
            behavior="position"
            enabled
            style={styles.mainView}
        >
            {renderHeader()}
            {renderForm()}
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: COLORS.white,
        flex: 1,
        paddingTop: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding2 * 2,
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: 5,
        height: 40,
        width: 160,
        paddingVertical: 9,
        ...FONTS.body2
    },
    image: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageSelect: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 8,
        backgroundColor: COLORS.white,
        height: 40,
        width: 40
    }
})

export default connect()(Add)