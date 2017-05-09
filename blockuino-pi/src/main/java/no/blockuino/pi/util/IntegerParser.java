package no.blockuino.pi.util;

/**
 * Created by joachimhaagenskeie on 15/04/2017.
 */
public class IntegerParser {
    public static Integer parseIntegerFromString(String input, Integer fallbackValue) {
        Integer retInt = null;

        try {
            retInt = Integer.parseInt(input);
        } catch (NumberFormatException nfe) {
            retInt = fallbackValue;
        }

        return retInt;
    }
}
