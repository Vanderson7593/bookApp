import React from 'react'
import {
    View,
    Image,
    FlatList,
    Text,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { COLORS, SIZES, FONTS, images, icons } from "../constants";
import ProgressBar from "../components/ProgressBar";
import { connect } from "react-redux";
import { getBooksList } from '../redux/selectors'

const Home = ({ navigation, store }) => {

    function renderHeader() {

        return (
            <View style={styles.headerView}>
                <View style={styles.headerViewLeft}>
                    <Text style={{ color: COLORS.darkgray, ...FONTS.body3 }}>Bem vindo de volta!</Text>
                    <Text style={{ ...FONTS.h1 }}>Leiturando</Text>
                </View>

                <View style={styles.headerViewRight}>
                    <TouchableOpacity onPress={() => navigation.navigate('Add')}>
                        <Image
                            source={icons.add}
                            resizeMode={'contain'}
                            style={{ marginTop: 5 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function emptyList() {
        return (
            <View style={{
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 250
            }}>
                <Text style={{ ...FONTS.body1, color: COLORS.gray }}>
                    Sem livros
                </Text>
            </View>
        )
    }

    function renderReadingBooks() {

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ paddingVertical: SIZES.padding }}
                onPress={() => { navigation.navigate("Detail", { data: item }) }}
            >
                <View
                    style={styles.readingFlatListView}
                >
                    <View>
                        <Image
                            source={{ uri: item.cover }}
                            resizeMode="cover"
                            style={{
                                height: 200,
                                width: 120,
                                borderRadius: 15
                            }}
                        />
                    </View>

                    <View style={styles.readingFlatListDescriptionView}>
                        <Text style={{ fontWeight: "700", ...FONTS.body3 }}>
                            {item.title}
                        </Text>
                        <Text style={{
                            paddingTop: SIZES.padding, ...FONTS.body3
                        }}>
                            {item.description}
                        </Text>
                        <Text style={styles.author}>
                            {item.author}
                        </Text>

                        <ProgressBar
                            style={{ position: "absolute", left: 12, bottom: 14, marginTop: 14 }}
                            pages={item.pages}
                            completed={item.currentPage}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        );

        return (
            <FlatList
                style={{ marginTop: SIZES.padding, marginBottom: SIZES.padding }}
                data={store.books}
                ListEmptyComponent={emptyList}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
            />
        )
    }

    return (
        <View style={styles.mainView}>
            {renderHeader()}
            {renderReadingBooks()}
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
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    headerViewRight: {
        display: 'flex'
    },
    headerViewLeft: {
        display: 'flex'
    },
    readingFlatListView: {
        flexDirection: 'row',

    },
    readingFlatListDescriptionView: {
        flexShrink: 1,
        padding: SIZES.padding,
        width: "100%",
    },
    author: {
        paddingTop: SIZES.padding,
        ...FONTS.body3
    },

})

const mapStateToProps = state => {
    const store = getBooksList(state)
    return { store };
};

export default connect(mapStateToProps)(Home)