(self.webpackChunklite=self.webpackChunklite||[]).push([[9088],{79088:(e,n,i)=>{"use strict";i.d(n,{zK:()=>o,L9:()=>d,Ui:()=>c,Gi:()=>S,VE:()=>p});var t=i(319),a=i.n(t),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ThemeUtilInterpolateHelpers_colorSpectrum"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ColorSpectrum"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorPoints"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ThemeUtil_colorPoint"}}]}}]}}].concat(a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"ThemeUtil_colorPoint"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ColorPoint"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"color"}},{kind:"Field",name:{kind:"Name",value:"point"}}]}}]))},o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ThemeUtil_colorSpectrum"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ColorSpectrum"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"backgroundColor"}},{kind:"FragmentSpread",name:{kind:"Name",value:"ThemeUtilInterpolateHelpers_colorSpectrum"}}]}}].concat(a()(l.definitions))},d=([{kind:"FragmentDefinition",name:{kind:"Name",value:"ThemeUtilAccent_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorPalette"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"defaultBackgroundSpectrum"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ThemeUtil_colorSpectrum"}}]}},{kind:"Field",name:{kind:"Name",value:"highlightSpectrum"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ThemeUtil_colorSpectrum"}}]}}]}}]}}].concat(a()(o.definitions)),[{kind:"FragmentDefinition",name:{kind:"Name",value:"ThemeUtilTintBackground_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorPalette"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tintBackgroundSpectrum"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ThemeUtil_colorSpectrum"}}]}}]}}]}}].concat(a()(o.definitions)),{kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"customDefaultBackgroundTheme_colorPalette"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ColorPalette"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"highlightSpectrum"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ThemeUtil_colorSpectrum"}}]}},{kind:"Field",name:{kind:"Name",value:"defaultBackgroundSpectrum"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ThemeUtil_colorSpectrum"}}]}},{kind:"Field",name:{kind:"Name",value:"tintBackgroundSpectrum"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ThemeUtil_colorSpectrum"}}]}}]}}].concat(a()(o.definitions))}),m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"collectionDefaultBackgroundTheme_colorPalette"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ColorPalette"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"customDefaultBackgroundTheme_colorPalette"}}]}}].concat(a()(d.definitions))},c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"customDefaultBackgroundTheme_customStyleSheet"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CustomStyleSheet"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"global"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorPalette"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"primary"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorPalette"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"customDefaultBackgroundTheme_colorPalette"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"background"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorPalette"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"customDefaultBackgroundTheme_colorPalette"}}]}}]}}]}}]}}]}}].concat(a()(d.definitions))},k={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"collectionDefaultBackgroundTheme_customStyleSheet"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CustomStyleSheet"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"customDefaultBackgroundTheme_customStyleSheet"}}]}}].concat(a()(c.definitions))},S={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"collectionDefaultBackgroundTheme_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorPalette"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"collectionDefaultBackgroundTheme_colorPalette"}}]}},{kind:"Field",name:{kind:"Name",value:"customStyleSheet"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"collectionDefaultBackgroundTheme_customStyleSheet"}}]}}]}}].concat(a()(m.definitions),a()(k.definitions))},u=([{kind:"FragmentDefinition",name:{kind:"Name",value:"publisherDefaultBackgroundTheme_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"collectionDefaultBackgroundTheme_collection"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"customStyleSheet"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"customDefaultBackgroundTheme_customStyleSheet"}}]}}]}}]}}].concat(a()(S.definitions),a()(c.definitions)),[{kind:"FragmentDefinition",name:{kind:"Name",value:"publisherDefaultBackgroundTheme_customStyleSheet"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CustomStyleSheet"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"collectionDefaultBackgroundTheme_customStyleSheet"}}]}}].concat(a()(k.definitions)),{kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"customTintBackgroundTheme_colorPalette"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ColorPalette"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tintBackgroundSpectrum"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ThemeUtil_colorSpectrum"}}]}}]}}].concat(a()(o.definitions))}),s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"collectionTintBackgroundTheme_colorPalette"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ColorPalette"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"customTintBackgroundTheme_colorPalette"}}]}}].concat(a()(u.definitions))},r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"customTintBackgroundTheme_customStyleSheet"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CustomStyleSheet"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"global"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorPalette"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"primary"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorPalette"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"customTintBackgroundTheme_colorPalette"}}]}}]}}]}}]}}]}}].concat(a()(u.definitions))},N={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"collectionTintBackgroundTheme_customStyleSheet"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CustomStyleSheet"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"customTintBackgroundTheme_customStyleSheet"}}]}}].concat(a()(r.definitions))},v={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"collectionTintBackgroundTheme_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorPalette"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"collectionTintBackgroundTheme_colorPalette"}}]}},{kind:"Field",name:{kind:"Name",value:"customStyleSheet"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"collectionTintBackgroundTheme_customStyleSheet"}}]}}]}}].concat(a()(s.definitions),a()(N.definitions))},p=([{kind:"FragmentDefinition",name:{kind:"Name",value:"publisherTintBackgroundTheme_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"collectionTintBackgroundTheme_collection"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"customStyleSheet"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"customTintBackgroundTheme_customStyleSheet"}}]}}]}}]}}].concat(a()(v.definitions),a()(r.definitions)),{kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"customStyleSheetFontTheme_customStyleSheet"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CustomStyleSheet"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"global"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"fonts"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"font1"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"font2"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"font3"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}}]}}]})}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/9088.6b836eb8.chunk.js.map