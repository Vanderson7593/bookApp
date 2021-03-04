import React from 'react'
import {
    View,
    Image,
    FlatList,
    Text,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { toggleFavBook } from '../redux/actions'
import { getBookById } from '../redux/selectors'
import store from '../redux/store'
import ProgressBar from '../components/ProgressBar';
import { COLORS, SIZES, FONTS, images, icons } from "../constants";


const Detail = ({ route, navigation, getBook, onToggleFav }) => {

    const { data } = route.params

    const book = getBook(data.id)

    function renderHeader() {

        return (
            <View style={styles.headerView}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image source={icons.arrowBack} />
                </TouchableOpacity>

                <Text style={{ marginLeft: 15, ...FONTS.body3 }}>Detalhes</Text>
            </View>
        )
    }


    function renderData() {

        return (
            <View style={{ display: "flex", paddingVertical: SIZES.padding * 4 }}>
                <View style={{ display: "flex", alignItems: "center" }}>
                    <Image
                        source={{ uri: book.cover }}
                        style={{
                            height: 300,
                            width: 220,
                            borderRadius: 8
                        }}
                        resizeMode="contain"
                    />
                </View>
                <View style={{ paddingVertical: SIZES.padding2 * 4 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ ...FONTS.h3 }}>{book.title}</Text>
                        <TouchableOpacity
                            onPress={() => { onToggleFav(book.id) }}
                        >
                            <Image
                                source={book.fav ? icons.favorite : icons.notFavorite}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ ...FONTS.body3, marginVertical: SIZES.padding }}>{book.description}</Text>
                    <Text style={{ ...FONTS.body4 }}>{book.author}</Text>
                    <View style={{ paddingVertical: SIZES.padding }}>
                        <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>
                            {book.currentPage} de {book.pages}
                            <Text style={{ color: COLORS.black }}> páginas</Text>
                        </Text>
                    </View>
                    <ProgressBar style={{ position: "relative" }} pages={book.pages} completed={data.currentPage} />
                </View>
            </View >
        )
    }

    return (
        <View style={styles.mainView}>
            {renderHeader()}
            {renderData()}
        </View>
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
})

const mapDispatchToProps = dispatch => {

    return {
        onToggleFav: id => {
            dispatch(toggleFavBook(id))
        }
    }
}

const mapStateToProps = state => {

    return {
        getBook: (id) => {
            const a = getBookById(id, state)
            return a[0]
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail)